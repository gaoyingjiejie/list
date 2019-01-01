$('.right').on('click', 'span', function(e) {
    console.log(e.target.className)
    var name = e.target
    if (name.classList.contains == 'compile') {
        alert('编辑')
    } else {
        alert('删除')
    }
})
var section = document.querySelector('section')
console.log(section)
$('footer').click(function() {
    $('.shade').show()

    $('.save').click(function() {
        var html = '';
        var title = $('.input').val().trim()
        var time = new Date().toLocaleString()
            // console.log(title)

        html = `<div class="list">
                    <div class="left">
                        <h2>分类名称:${title}</h2>
                        <p>添加时间：${time}</p>
                    </div>
                    <div class="right">
                        <span><i class="icon iconfont icon-changyonggoupiaorenbianji compile"></i></span>
                        <span><i class="icon iconfont icon-trash delete"></i></span>
                    </div>
                </div>`;
        section.innerHTML += html;
        // $('section').html(html)
        $('.input').val('')
        $('.shade').hide()
    })


})