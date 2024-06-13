export function initSlider() {
	const sliderButtons = document.querySelectorAll(
		'.slider-container .slide-button'
	)
	const sliderScrollbar = document.querySelector('.container .slider-scrollbar')
	const imageList = document.querySelector('.slider-container .image-list')

	const maxScrollLeft = imageList
		? imageList.scrollWidth - imageList.clientWidth
		: 0
	if (sliderScrollbar) {
		const scrollbarThumb = sliderScrollbar.querySelector('.scrollbar-thumb')
		// Update thumb position on mouse move
		scrollbarThumb.addEventListener('mousedown', (e) => {
			const startX = e.clientX
			const thumbPosition = scrollbarThumb.offsetLeft

			const handleMouseMove = (e) => {
				const deltaX = e.clientX - startX
				const newThumbPosition = thumbPosition + deltaX
				const maxThumbPosition =
					sliderScrollbar.getBoundingClientRect().width -
					scrollbarThumb.offsetWidth

				const boundedPosition = Math.max(
					0,
					Math.min(maxThumbPosition, newThumbPosition)
				)
				const scrollPosition =
					(boundedPosition / maxThumbPosition) * maxScrollLeft

				scrollbarThumb.style.left = `${boundedPosition}px`
				imageList.scrollLeft = scrollPosition
			}

			const handleMouseUp = () => {
				document.removeEventListener('mousemove', handleMouseMove)
				document.removeEventListener('mouseUp', handleMouseUp)
			}

			// Add event listener for drag interaction
			document.addEventListener('mousemove', handleMouseMove)
			document.addEventListener('mouseup', handleMouseUp)
		})
		// Show images according to the slide button clicks
		sliderButtons.forEach((btn) => {
			btn.addEventListener('click', () => {
				const direction = btn.id === 'prev-slide' ? -1 : 1
				const scrollAmount = imageList.clientWidth * direction
				imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' })
			})
		})
		const handleSlideButton = () => {
			sliderButtons[0].style.display =
				imageList.scrollLeft <= 0 ? 'none' : 'block'
			sliderButtons[1].style.display =
				imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block'
		}

		// Update scrollbar position based on image scroll
		const updateScrollThumbPosition = () => {
			const scrollPosition = imageList.scrollLeft
			const thumbPosition =
				(scrollPosition / maxScrollLeft) *
				(sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth)
			scrollbarThumb.style.left = `${thumbPosition}px`
		}
		imageList.addEventListener('scroll', () => {
			handleSlideButton()
			updateScrollThumbPosition()
		})
	}
}
