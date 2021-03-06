/*
var IconShareButton = {
	template: `
		<button @click="share"><i class="fas fa-share-square"></i></button>
	`,
	data: function () {
		return {
			_isProcessing: false
		}
	},
	methods: {
		share: function () {
			if (this._isProcessing) {
				return
			}
			if (!window.confirm('シェアしますか？')) {
				return
			}
			this._isProcessing = true
			setTimeout(() => {
				window.alert('シェアしました')
				this._isProcessing = false
			}, 300)
		}
	}
}
*/

/*
var TextShareButton = {
	template: `
		<button @click="share">{{ buttonLabel }}</button>
	`,
	data: function () {
		return {
			buttonLabel: 'シェアする',
			_isProcessing: false
		}
	},
	methods: {
		share: function () {
			if (this._isProcessing) {
				return
			}
			if (!window.confirm('シェアしますか？')) {
				return
			}
			this._isProcessing = true
			setTimeout(() => {
				window.alert('シェアしました')
				this._isProcessing = false
		}, 300)
		}
	}
}
*/

var Sharable = {
	data: function () {
		return {
			_isProcessing: false
		}
	},
	created: function () {
		console.log('Sharableミックスインのフックが呼ばれました')
	},
	methods: {
		share: function () {
			if ( this._isProcessing) {
				return
			}
			if (!window.confirm('シェアしますか？')) {
				return
			}
			this._isProcessing = true
			setTimeout(() => {
				window.alert('シェアしました。')
			this._isProcessing = false
		}, 300)
		}
	}
}


var IconShareButton = {
	mixins: [Sharable],
	created: function (){
		console.log('IconShareButtonのフックが呼ばれました')
	},
	template: `
		<button @click="share"><i class="fas fa-share-square"></i></button>
	`
}


var TextShareButton = {
	mixins: [Sharable],
	template: `
		<button @click="share">{{ buttonLabel }}</button>
	`,
	created: function () {
		console.log('TextShareButtonのフックが呼ばれました')
	},
	methods: {
		share () {
			window.alert('コンポーネントからシェアしました。')
		}
	},
	data: function () {
		return {
			buttonLabel: 'シェアする'
		}
	}
}


new Vue({
	el: '#app',
	components: {
		IconShareButton,
		TextShareButton
	}
})