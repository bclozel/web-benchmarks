import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class JsonGet extends Simulation {
	val baseUrl = System.getProperty("baseUrl")
	val increment = Integer.parseInt(System.getProperty("increment"))
	val steps = Integer.parseInt(System.getProperty("steps"))

	val httpProtocol = http
        .baseUrl(baseUrl)
        .acceptHeader("application/json")
        .acceptLanguageHeader("en-US,en;q=0.5")
        .acceptEncodingHeader("gzip, deflate")
        .userAgentHeader("Gatling/Spring Web Benchmark")

	val scn = scenario("Get JSON payload")
		.forever {
			exec(http("jsonGet").get("/user/bchmark"))
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