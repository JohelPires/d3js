d3.select('h1').style('color', 'orangered').text('Data Driven Documents')

d3.select('body').append('p').text('this is a paragraph')
d3.select('body').append('p').text('this is a second paragraph')
d3.select('body').append('p').text('this is a third paragraph')

d3.selectAll('p').style('color', 'dodgerblue')

const dataset = [1, 2, 3, 4, 5]

d3.select('body')
  .selectAll('div')
  .data(dataset)
  .enter()
  .append('div')
  .text((d) => `${d}º item added here`)
