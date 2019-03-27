import React, { Component } from 'react';
import './style.scss';

class ImageFace extends Component {

	render() {

		let {imgSrc, description} = this.props.data;

		if(description){
			description = description.replace(/(^|\s)(#[a-z\d-]+)/g,'<span class="hashtag">$2</span>');
		}

		return (
			<div className='image-face'>
				<img className='image-face__img' src={imgSrc} alt={description || imgSrc}/>
				{!!description &&
					<div className='image-face__desc'>
						<p dangerouslySetInnerHTML={{__html: description}}></p>
					</div>
				}
			</div>
		);
	}
}

export default ImageFace;
