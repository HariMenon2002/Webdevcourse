You might’ve used express to create a Backend server.
The way to run it usually is node index.js which starts a process on a certain port (3000 for example)
When you have to deploy it on the internet, there are a few ways - 
1. Go to aws, GCP, Azure, Cloudflare   
a.Rent a VM (Virtual Machine) and deploy your app
b.Put it in an Auto scaling group
c.Deploy it in a Kubernetes cluster
 
There are a few downsides to doing this - 
1. Taking care of how/when to scale 
2. Base cost even if no one is visiting your website
3. Monitoring various servers to make sure no server is down
 
What if, you could just write the code and someone else could take care of all of these problems?
                                Serverless backends
"Serverless" is a backend deployment in which the cloud provider dynamically manages the allocation and provisioning of servers. The term "serverless" doesn't mean there are no servers involved. Instead, it means that developers and operators do not have to worry about the servers. Serverless backend providers include AWS lambda and cloudflare workers
 
Easier definition
What if you could just write your express routes and run a command. The app would automatically Deploy, Autoscale and Charge you on a per request basis (rather than you paying for VMs)
 
Problems with this approach
1. More expensive at scale
2. Cold start problem