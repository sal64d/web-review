import { useState, useEffect, createRef } from 'react'

function App() {
	const el = createRef(null);
	useEffect(() => {
		const hoverHandle = (e) => {
			const rect = e.target.getClientRects()[0];
			console.log(rect)
			if(el.current?.style && rect){
				el.current.style.top = rect.top + 'px'; 
				el.current.style.bottom = rect.bottom + 'px';
				el.current.style.right = rect.right + 'px';
				el.current.style.left = rect.left + 'px'
				el.current.style.width = rect.width + 'px';
				el.current.style.height = rect.height + 'px';
			}
		}
		document.addEventListener('mouseover', hoverHandle);
		return () => document.removeEventListener('mouseover', hoverHandle);
	}, [])

	return (
		<div style={{
			position: "fixed",
			width: "100vw",
			height: "100vh",
			top: 0, left:0,
			pointerEvents: "none",
		}}>
			<h1>Hello world</h1>
			<div ref={el} style={{border: "solid 8px blue", borderRadius: "4px", position: "fixed", background: "blue", opacity: .5}}></div>
		</div>
	)

}

export default App
