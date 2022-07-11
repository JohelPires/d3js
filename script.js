// d3.select('h1').style('color', 'orangered').text('Data Driven Documents')

// d3.select('body').append('p').text('this is a paragraph')
// d3.select('body').append('p').text('this is a second paragraph')
// d3.select('body').append('p').text('this is a third paragraph')

// d3.selectAll('p').style('color', 'dodgerblue')

// const dataset = [1, 2, 3, 4, 5]

// d3.select('body')
//   .selectAll('div')
//   .data(dataset)
//   .enter()
//   .append('div')
//   .text((d) => `${d}º item added here`)

const bardata = [80, 100, 56, 120, 180, 30, 40, 120, 160]

// const svgWidth = 500
// const svgHeigth = 300
// const barPadding = 5
// const barWidth = svgWidth / bardata.length

// const svg = d3.select('svg').attr('width'.svgWidth).attr('heigth', svgHeigth)

// const barChart = svg
//   .selectAll('rect')
//   .data(bardata)
//   .enter()
//   .append('rect')
//   .attr('y', (d) => svgHeight - d)
//   .attr('heigth', (d) => d)
//   .attr('width', barWidth - parPadding)
//   .attr('transform', (d, i) => {
//     const translate = [barWidth * i, 0]
//     return 'translate(' + translate + ')'
//   })
//   .attr('fill', 'dodgerblue')

d3.select('ul')
  .selectAll('li')
  .data(bardata)
  .enter()
  .append('li')
  .text((d) => d)

const barHeight = 40

d3.select('svg')
  .selectAll('rect')
  .data(bardata)
  .enter()
  .append('rect')
  .attr('width', (d) => d)
  .attr('height', barHeight - 5)
  .attr('transform', (d, i) => `translate(100, ${i * barHeight})`)
