import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class HtmlGet extends Simulation {
	val baseUrl = System.getProperty("baseUrl")
	val increment = Integer.parseInt(System.getProperty("increment"))
	val steps = Integer.parseInt(System.getProperty("steps"))

	val httpProtocol = http
        .baseUrl(baseUrl)
        .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8")
        .acceptLanguageHeader("en-US,en;q=0.5")
        .acceptEncodingHeader("gzip, deflate")
        .userAgentHeader("Gatling/Spring Web Benchmark")

	val scn = scenario("Get HTML view")
		.forever {
			exec(http("htmlGet").get("/home"))
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