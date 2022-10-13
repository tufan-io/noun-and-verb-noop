# noun-and-verb-noop
Prisma requires the @prisma/client be generated on the run-target.
In turn this runs all generators.

Once bundled, all `noun-and-verb` code is bundled into the API server.
re-running the generator results is not necessary and more importantly can lead to unexpected behaviors. 

This modules exists as an empty prisma generator, to provide a 
place holder for such situation when the `noun-and-verb` generator
is part of the prisma schema.
