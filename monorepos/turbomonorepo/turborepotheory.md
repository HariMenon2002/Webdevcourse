Turborepo is not a monorepo framework. It is a build system orchestrator.

Why turborepo?
1.Shared Code Reuse
2.Enhanced Collaboration
3.Optimized Builds and CI/CD: Tools like TurboRepo offer smart caching and task execution strategies that can significantly reduce build and testing times.
4.Centralized Tooling and Configuration: Managing build tools, linters, formatters, and other configurations is simpler in a monorepo because you can have a single set of tools for the entire project. 

Build system:
A build system automates the process of transforming source code written by developers into binary code that can be executed by a computer. For JavaScript and TypeScript projects, this process can include transpilation (converting TS to JS), bundling (combining multiple files into fewer files), minification (reducing file size), and more. A build system might also handle running tests, linting, and deploying applications.
Build System Orchestrator
TurboRepo acts more like a build system orchestrator rather than a direct build system itself. It doesn't directly perform tasks like transpilation, bundling, minification, or running tests. Instead, TurboRepo allows you to define tasks in your monorepo that call other tools (which are the actual build systems) to perform these actions. 
These tools can include anything from tsc, vite etc
Monorepo Framework
A monorepo framework provides tools and conventions for managing projects that contain multiple packages or applications within a single repository (monorepo). This includes dependency management between packages, workspace configuration.

Main uses of turborepo are:
1.Dependency management during builds. For eg it will first run npm run build on common folder then the backend and frontend(ie orchestrating everything). Otherwise we would have had to do it all on our own. TurboRepo understands the dependency graph of your monorepo. This means it knows which packages depend on each other and can ensure tasks are run in the correct order.

2.Caching during builds : TurboRepo caches the outputs of tasks, so if you run a task and then run it again without changing any of the inputs (source files, dependencies, configuration), TurboRepo can skip the actual execution and provide the output from the cache. This can significantly speed up build times, especially in continuous integration environments.

3.Parallelization: It can run independent tasks in parallel, making efficient use of your machine's resources. This reduces the overall time needed to complete all tasks in your project.

4.