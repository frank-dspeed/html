# @stealify/html

i want to collect my tag html implementations and streaming html implementations into a single lib that i call html as i guess i will use that in future more often then react or angular or anything else as it gives me good ways to hook into the render process and control my loading pipeline.

This implements concepts like my HTML Component pattern that is based on the fact that script tags get executed sync when they get inserted and rendered in the dom which gives fine grained control without installing extra observations.

There are 4 types of speeds. 
1. Functioning - amount of systems that feed processes in.
2. Processing - Iteration over functioning.
3. Expansion - Scaling up and down.
4. Timing - When do something. 

The core concept of this lib is to sustain growth. 
