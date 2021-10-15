function play() {
    let N = 4
    let points = []
    let polygon = d3.select('#svgimg').append("polygon");
    let polygonLeft = document.querySelector('polygon')
    polygonLeft.remove()
    for (let index = 0; index < N; index++) {
        let randomX = Math.floor(Math.random()*100+1)
        let randomY = Math.floor(Math.random()*100+1)
        points.push([randomX,randomY])
    }
    points.flatMap( function (p) {
        p.join(',')
    })
    polygon.attr("points", points.join(' '))
    .attr("stroke", "#000000")
    .attr("fill", "none");
    let circle = d3.select('#svgimg').append("circle");
    circle
    .attr("cx", "50")
    .attr("cy", "50")
    .attr("r", "50")
    .attr("fill", "none")
    .attr("stroke", "#000000")
    .attr("stroke-width", "1")
}