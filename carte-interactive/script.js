var map = document.querySelector('#map')

var paths = map.querySelectorAll('.maps_img path')
var links = map.querySelectorAll('.maps_list a')

// polyfill foreach
if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function(callback) {
        [].forEach.call(this, callback)
    }
}

var activeSelect = function(id) {
    map.querySelectorAll('.is-active').forEach(function(item) {
        item.classList.remove('is-active')
    })
    if (id !== undefined) {
        document.querySelector('#' + id).classList.add('is-active')
        document.querySelector('#FR-' + id).classList.add('is-active')
    }

}

paths.forEach(function(path) {
    path.addEventListener('mouseenter', function() {
        var id = this.id.replace('FR-', '')
        activeSelect(id)

    })
})

links.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        var id = this.id
        activeSelect(id)

    })
})

map.addEventListener('mouseover', function() {
    activeSelect()
})

paths.forEach(function(path) {
    path.addEventListener('click', function() {
        map.querySelectorAll('.land').forEach(function(item) {
            item.style.visibility = "hidden"
        })
        var region = document.getElementById(this.id)
        region.style.visibility = "visible"
        region.style.fill = "rgb(165, 116, 200)"
        region.style.stroke = "black"
        region.style.border = "1px"
        region.style.transform = "scale(1.5,1.5)"
        region.style.position = "absolute"
        region.style.top = 0
        region.style.left = 0


        console.log(document.getElementById(this.id).style)
    })
})