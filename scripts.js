function openSection(section_num) {
	// 1 - rooms, 2 - polls
	if(section_num==1) {
		section = 'rooms'
	}
	if(section_num==2) {
		section = 'polls'
	}
	selectedSectionHeight = document.getElementById(section+'_section').offsetTop-35
	window.scrollTo(0,selectedSectionHeight)
	document.querySelectorAll('#cite_menu .line').forEach(el => el.classList.add('hide'))
	document.getElementById(section+'_btn').querySelector('.line').classList.remove('hide')
}
// также необходимо событие при промотке
function search() {
	document.getElementById('search_result').classList.remove('hide')
	// требуется также событие закрытия при клике вне блока
}
function showProfileBlock() {
	if(document.getElementById('profile_menu').classList.contains('hide')) {
		document.getElementById('profile_menu').classList.remove('hide')
	} else {
		document.getElementById('profile_menu').classList.add('hide')
	}
}
function showNotifications() {
	if(document.getElementById('notifications_block').classList.contains('hide')) {
		document.getElementById('notifications_block').classList.remove('hide')
	} else {
		document.getElementById('notifications_block').classList.add('hide')
	}
}
function toggleSlide(el,slide) {
	document.getElementById('carusel').querySelectorAll('.carusel-blocks > li').forEach(el => el.classList.add('hide'))
	document.getElementById('slide_'+slide).classList.remove('hide')
	document.getElementById('toggles').querySelector('.active').classList.remove('active')
	el.classList.add('active')
	// добавить также переключение по времени
}
function showTagsList(el) {
	if(el.parentNode.querySelector('.tags-list').classList.contains('hide')) {
		el.parentNode.querySelector('.tags-list').classList.remove('hide')
	} else {
		el.parentNode.querySelector('.tags-list').classList.add('hide')
	}
}
function selectTag(el,section) {
	let li = document.createElement('li')
	textNode = document.createTextNode(el.textContent)
	li.append(textNode)
	let icon = document.createElement('i')
	icon.classList.add('el-icon-minus')
	icon.classList.add('remove-tag')
	icon.addEventListener('click', removeTag, false)
	li.append(icon)
	document.getElementById('selected_tags_'+section).append(li)
}
function removeTag() {
	this.parentNode.remove()
}

document.querySelectorAll('.selected-tags .remove-tag').forEach(el => el.addEventListener('click', removeTag, false))

function toggleClick(section_num,el) {
	// 1 - rooms, 2 - polls
	if(section_num==1) {
		section = 'pop'
	}
	if(section_num==2) {
		section = 'new'
	}
	if(section_num==3) {
		section = 'my'
	}
	if(section_num==4) {
		section = 'saved'
	}
	document.querySelectorAll('#rooms_toggle .line').forEach(elem => elem.classList.add('hide'))
	el.querySelector('.line').classList.remove('hide')
}
function sendVoice() {
	all_voices = 6
	voices = [2,4]
	vars_list = document.getElementById('poll_vars')
	var_ids = [1,2]
	var_ids.forEach( id =>
		vars_list.querySelector('#poll_vars [data-id="'+id+'"] .progress').style.width = voices[id]/all_voices*100+"%"
	)
	var_ids.forEach( id =>
		vars_list.querySelector('#poll_vars [data-id="'+id+'"] .progress').classList.remove('hide')
	)
}