var canFinish = function(numCourses, prerequisites) {
    if(prerequisites.length ==0) return true;
    const buildGraph = (courses)=> {
        let graph = {};
        while(courses.length){
            let [course,pre] = courses.shift();
            if(graph[course] != undefined){
                graph[course].push(pre);
            } else {
                graph[course] = [pre];
            }
            if(graph[pre] == undefined){
                graph[pre] = [];
            }
        }
        return graph;
    };
    
    const discovered = new Set();
    const processing = new Set();
    const courseGraph = buildGraph(prerequisites.slice(0));
    // console.log(courseGraph,"lkkk")

    
    let hasCycle = false;
    const dfs = (node) => {
        console.log(node,"node");
        if(processing.has(node)) {
            hasCycle = true;
            return;
        }
        if(hasCycle) return;
        if(discovered.has(node)) return;
        discovered.add(node);
        processing.add(node);
        console.log(courseGraph[node],"hhhh");
        courseGraph[node].forEach(dfs);
        processing.delete(node);
    };
    
    
    for(let i=0;i < prerequisites.length;i++){
      let node = prerequisites[i][0];
    //   console.log("nnnn")
        dfs(node);
    }
    // console.log(hasCycle,"cyc")
    return !hasCycle;
};


console.log(canFinish(2,[[1,0],[0,1]]));


// Amazon Apple Facebook Google Microsoft Twitter

//vvi