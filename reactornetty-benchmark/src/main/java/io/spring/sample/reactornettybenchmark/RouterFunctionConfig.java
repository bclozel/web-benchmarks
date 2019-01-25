/*
 * Copyright 2002-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.spring.sample.reactornettybenchmark;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.util.function.BiFunction;
import java.util.function.Consumer;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.netty.buffer.ByteBuf;
import io.netty.buffer.ByteBufAllocator;
import io.netty.buffer.Unpooled;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.util.CharsetUtil;
import org.reactivestreams.Publisher;
import reactor.netty.http.server.HttpServerRequest;
import reactor.netty.http.server.HttpServerResponse;
import reactor.netty.http.server.HttpServerRoutes;

import org.springframework.util.FileCopyUtils;

final class RouterFunctionConfig {

	static Consumer<? super HttpServerRoutes> routesBuilder() {
		return r -> r.get("/text", text())
				.post("/echo", echo())
				.get("/home", home())
				.post("/user", createUser())
				.get("/user/{id}", findUser());
	}

	static BiFunction<HttpServerRequest, HttpServerResponse, Publisher<Void>> text() {
		return (req, res) ->
				res.header("Content-Type", "text/plain")
						.sendObject(Unpooled.wrappedBuffer(msgBytes));
	}

	static BiFunction<HttpServerRequest, HttpServerResponse, Publisher<Void>> echo() {
		return (req, res) -> res.send(req.receive().retain());
	}

	static BiFunction<HttpServerRequest, HttpServerResponse, Publisher<Void>> home() {
		return (req, res) -> res.sendFile(resource);
	}

	static BiFunction<HttpServerRequest, HttpServerResponse, Publisher<Void>> createUser() {
		return (req, res) ->
				res.status(HttpResponseStatus.CREATED)
						.header("Content-Type", "application/json")
						.sendObject(
								req.receive()
										.aggregate()
										.asInputStream()
										.map(in -> toByteBuf(fromInputStream(in))));
	}

	static BiFunction<HttpServerRequest, HttpServerResponse, Publisher<Void>> findUser() {
		return (req, res) ->
				res.header("Content-Type", "application/json")
						.sendObject(toByteBuf(new User(req.param("id"), "Ben Chmark")));
	}

	static ByteBuf toByteBuf(Object any) {
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		try {
			mapper.writeValue(out, any);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return ByteBufAllocator.DEFAULT
				.buffer()
				.writeBytes(out.toByteArray());
	}

	static Object fromInputStream(InputStream in) {
		try {
			return mapper.readValue(in, User.class);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	static final byte[] msgBytes = "Hello, World!".getBytes(CharsetUtil.ISO_8859_1);

	static Path resource;
	static {
		Path path;
		try {
			String template = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n" +
					"    <meta charset=\"UTF-8\">\n    <title>Home</title>\n" +
					"</head>\n<body>\n    <p data-th-text=\"Hello, World!\">Message</p>\n" +
					"</body>\n</html>";
			File tempFile = File.createTempFile("spring", null);
			tempFile.deleteOnExit();
			FileCopyUtils.copy(template.getBytes(StandardCharsets.UTF_8), tempFile);
			resource = tempFile.toPath();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	static final ObjectMapper mapper = new ObjectMapper();
}
