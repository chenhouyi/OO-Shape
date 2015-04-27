/**
 * JavaScript 面向对象编程实践
 * @filename Shape.js
 * @version 0.1.1
 * @author Howie Chen
 */

// 形状
function Shape() {
	if (this instanceof Shape) {
		var __name;
		this.getName = function() {
			return __name;
		}
		this.setName = function(newName) {
			__name = newName;
		}
	} else {
		return new Shape();
	}
}
Shape.prototype = {
	constructor: Shape,
	perimeter: function(){},	// 计算周长
	area: function(){}			// 计算面积
};

// 长方形
function Rectangle() {
	if (this instanceof Rectangle) {
		// 定义成员属性和方法
		var __length;
		this.getLength = function() {
			return __length;
		};
		this.setLength = function(newLength) {
			__length = newLength;
			return this;
		};
		var __width;
		this.getWidth = function() {
			return __width;
		};
		this.setWidth = function(newWidth) {
			__width = newWidth;
			return this;
		};
		// 初始化实例
		Shape.call(this);
		switch (arguments.length) {
			case 2: {
				if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
					this.setLength(Math.max(arguments[0], arguments[1]));
					this.setWidth(Math.min(arguments[0], arguments[1]));
				}
				break;
			}
		}
	} else {
		var rectangle = new Rectangle();
		arguments.callee.apply(rectangle, arguments);
		return rectangle;
	}
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.perimeter = function() {
	return (this.getLength() * 2 + this.getWidth() * 2);
};
Rectangle.prototype.area = function() {
	return (this.getLength() * this.getWidth());
}

// 正方形
function Square() {
	if (this instanceof Square) {
		// 定义成员属性和方法
		var __length;
		this.getLength = function() {
			return __length;
		};
		this.setLength = function(newLength) {
			__length = newLength;
			return this;
		};
		// 初始化实例
		Shape.call(this);
		switch (arguments.length) {
			case 1: {
				switch (typeof arguments[0]) {
					case 'number': {
						this.setLength(arguments[0]);
					}
				}
				break;
			}
		}
	} else {
		var square = new Square();
		arguments.callee.apply(square, arguments);
		return square;
	}
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.perimeter = function() {
	return (this.getLength() * 4);
};
Square.prototype.area = function() {
	return (Math.pow(this.getLength(), 2));
};