Create a week-12-2 folder, do npm init -y and npx tsc --init
Change rootdir and outdir

Advanced TS APIs
1.Pick- Pick allows you to create a new type by selecting a set of properties(Keys) from an existing type(Type).Imagine you have a User model with several properties but for a user profile display you only need a subset of properties

2.Partial- makes all properties of a type optional,creating a type with the same properties, but each marked as optional. Specifically useful when you want to do updates.