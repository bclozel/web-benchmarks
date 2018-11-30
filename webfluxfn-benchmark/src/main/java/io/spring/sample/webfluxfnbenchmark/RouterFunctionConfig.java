/*
 * Copyright 2002-2018 the original author or authors.
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

package io.spring.sample.webfluxfnbenchmark;

import java.util.Collections;
import java.util.Map;

import reactor.core.publisher.Mono;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RequestPredicates.contentType;

@Configuration
public class RouterFunctionConfig {

	@Bean
	public RouterFunction<ServerResponse> routerFunctions() {
		return RouterFunctions.route()
				.GET("/text", this::hello)
				.POST("/echo", this::echo)
				.POST("/user", accept(MediaType.APPLICATION_JSON)
						.and(contentType(MediaType.APPLICATION_JSON)), this::createUser)
				.GET("/user/{id}", accept(MediaType.APPLICATION_JSON), this::showUser)
				.GET("/home", this::home)
				.build();
	}

	private Mono<ServerResponse> hello(ServerRequest req) {
		return ServerResponse.ok()
				.contentType(MediaType.TEXT_PLAIN)
				.syncBody("Hello, World!");
	}

	private Mono<ServerResponse> echo(ServerRequest req) {
		return ServerResponse.ok()
				.body(req.bodyToFlux(DataBuffer.class), DataBuffer.class);
	}

	private Mono<ServerResponse> createUser(ServerRequest req) {
		return ServerResponse.status(201)
				.body(req.bodyToMono(User.class), User.class);
	}

	private Mono<ServerResponse> showUser(ServerRequest req) {
		String id = req.pathVariable("id");
		return ServerResponse.ok()
				.contentType(MediaType.APPLICATION_JSON)
				.syncBody(new User(id, "Ben Chmark"));
	}

	private Mono<ServerResponse> home(ServerRequest req) {
		Map<String, String> model = Collections.singletonMap("message", "Hello, World!");
		return ServerResponse.ok()
				.render("home", model);
	}

}
