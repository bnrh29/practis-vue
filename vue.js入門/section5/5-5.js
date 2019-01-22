var MyButton = {
	props: ['href', 'tag'],
	render: function (createElement) {
		var tag = this.tag || (this.href ? 'a' : 'button')

		return createElement(tag, {
			attrs: {
				href: this.href || '#'
			}
		}, this.$slots.default)
	},
/*	template: `
	<a v-if="(!tag && href) || tag === 'a'" :href="href || '#'">
		<slot></slot>
	</a>
	<span v-else-if="tag === 'span'">
		<slot></slot>
	</span>
	<button v-else>
		<slot></slot>
	</button>
	`
*/
}

/*
new Vue({
	el: '#app',
	render: function (createElement) {
		return createElement('my-button', {
			attrs: {
				href: 'https://vuejs.org/'
			},
			props: {
				tag: 'a'
			}
		}, 'anchor')
	},
	components: {
		MyButton: MyButton
	}
})
*/

new Vue({
	el: '#app',
	data: function () {
		return {
			counter:0
		}
	},
	render: function (createElement) {
		return createElement(
			'div',
			[
				createElement(
					'button',
					{
						on: {
							click: () => this.counter += 1
						}
					},
					'クリックでカウントアップ'
				),
				createElement(
					'p',
					[
						'クリックされた回数:',
						createElement(
							'b',
							this.counter + ' 回'
						)
					]
				)
			]
		)
	}
})
