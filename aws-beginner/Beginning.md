Go to aws and login. Search for EC2 and there in instances click on launch instance. Give any name to it.
Select Ubuntu machine and instance type as t2.micro(a very small machine, switch it off after use).No of instances should be one.

Key-pairs(public-private key) are needed to login into the server(like passwords) after it is launched(ie connect to the server so that i can deploy something). So in the key-pair field click on create new key pair option and in that select RSA and .pem file.You can give any key-pair name.When you create a key-pair, a .pem file is downloaded which has the private key and it should be kept private.

SSH(Secure Shell) is a protocol which can be run to connect to aws  

In network settings select create security group option and select the below options:
1.Allow SSH(i need to open ssh port of the aws machine so that my lap can connect to it)
2.Allow HTTP traffic
2.Allow HTTPS traffic

Launch instance.Now in instaces ,you will find your instance. To stop the instance, click on the tickbox in the instance and then on instance state.In instance state you will see an option to stop instance

If you want to open the instance to any other ports,select the instance and go to security section, and change inbound rules
