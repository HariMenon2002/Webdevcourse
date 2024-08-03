/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default { //cloudflare always comes here, routing should be done from here
	async fetch(request, env, ctx): Promise<Response> {//async function will return a Promise. Here it is of generic type Response
		//return new Response('Hello World!');
	    return Response.json({
			message:"hi there"
		})
	},
} satisfies ExportedHandler<Env>;

//way to do routing
// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		console.log(request.body);
// 		console.log(request.headers);
// 		console.log(request.method);
		
// 		if (request.method === "GET") {
// 			return Response.json({
// 				message: "you sent a get request"
// 			});
// 		} else {
// 			return Response.json({
// 				message: "you did not send a get request"
// 			});
// 		}
// 	},
// };


//Problem with the above method of routing is that its too ugly and we need a library like express to do routing
//Express cant be used here as it heavily relies on Nodejs dependencies which CloudFlare doesnt have

//We can use Hono
