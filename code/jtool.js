(function() {
	function Jtool() {};
	
	Jtool.getCoords = function(elem) {
		let coords = elem.getBoundingClientRect();

		let obj = {
			left: window.pageXOffset + coords.left,
			top: window.pageYOffset + coords.top,
			right: elem.clientWidth
		}

		return obj;
	};

	Jtool.addNode = function(nodes, where) {
		if(!Array.isArray(nodes)) {
			where.appendChild(nodes);
			return;
		}

		nodes.forEach(function(node) {
			where.appendChild(node);
		});
	};

	Jtool.createElem = function(name, className) {
		let node = document.createElement(name);
		if(className) node.className = className;

		return node;
	}

	Jtool.findELem = function(x, y, scale) {
		let back = wrapBackground.querySelector('.background');
		return document.elementFromPoint( 
			(x * scale) + this.getCoords(back).left + 5, 
			(y * scale) + this.getCoords(back).top + 5);
	};

	Jtool.random = function(min, max) {
		return Math.floor( min + Math.random() * (max - min) );
	};

	window.Jtool = Jtool;
})();