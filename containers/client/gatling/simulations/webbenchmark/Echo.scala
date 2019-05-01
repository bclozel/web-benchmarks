import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class Echo extends Simulation {
	val baseUrl = System.getProperty("baseUrl")
	val increment = Integer.parseInt(System.getProperty("increment"))
	val steps = Integer.parseInt(System.getProperty("steps"))

	val httpProtocol = http
        .baseUrl(baseUrl)
        .acceptHeader("text/plain")
        .acceptLanguageHeader("en-US,en;q=0.5")
        .acceptEncodingHeader("gzip, deflate")
        .userAgentHeader("Gatling/Spring Web Benchmark")

    val body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at orci mollis, accumsan ligula elementum, auctor dui. Donec eleifend risus vel turpis egestas, vitae pretium metus tincidunt. Proin aliquet ipsum vel dolor rutrum semper. Morbi et sem eu lorem egestas ullamcorper non a massa."

	val scn = scenario("Send text to an echo endpoint")
		.forever {
			exec(http("echo").post("/echo").header("Content-Type", "text/plain").body(StringBody(body)))
		}

	setUp(
	  scn.inject(
		incrementConcurrentUsers(increment)
		  .times(steps)
		  .eachLevelLasting(20 seconds)
		  .separatedByRampsLasting(10 seconds)
		  .startingFrom(0)
	  )
	).maxDuration(20 minutes).protocols(httpProtocol)
}