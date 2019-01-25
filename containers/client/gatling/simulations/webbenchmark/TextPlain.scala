import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class TextPlain extends Simulation {
	val baseUrl = System.getProperty("baseUrl")
	val concurrency = Integer.parseInt(System.getProperty("concurrency"))

	val httpProtocol = http
        .baseUrl(baseUrl)
        .acceptHeader("text/plain")
        .acceptLanguageHeader("en-US,en;q=0.5")
        .acceptEncodingHeader("gzip, deflate")
        .userAgentHeader("Gatling/Spring Web Benchmark")

	val scn = scenario("Receive plain Text")
		.forever {
			exec(http("plain_text").get("/text"))
		}

	setUp(scn.inject(atOnceUsers(concurrency)).protocols(httpProtocol))
		.throttle(
			reachRps(2500) in (10 seconds), holdFor(20 seconds),
			reachRps(5000) in (10 seconds), holdFor(20 seconds),
			reachRps(7500) in (10 seconds), holdFor(20 seconds),
			reachRps(10000) in (10 seconds), holdFor(20 seconds),
			reachRps(12500) in (10 seconds), holdFor(20 seconds),
			reachRps(15000) in (10 seconds), holdFor(20 seconds),
			reachRps(17500) in (10 seconds), holdFor(20 seconds),
			reachRps(20000) in (10 seconds), holdFor(20 seconds),
			reachRps(22500) in (10 seconds), holdFor(20 seconds),
			reachRps(25000) in (10 seconds), holdFor(20 seconds),
			reachRps(27500) in (10 seconds), holdFor(20 seconds),
			reachRps(30000) in (10 seconds), holdFor(20 seconds),
			reachRps(32500) in (10 seconds), holdFor(20 seconds),
			reachRps(35000) in (10 seconds), holdFor(20 seconds),
			reachRps(37500) in (10 seconds), holdFor(20 seconds),
			reachRps(40000) in (10 seconds), holdFor(20 seconds)
		)
		.maxDuration(10 minutes)
}