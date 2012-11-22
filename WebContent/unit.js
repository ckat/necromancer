var lastId = 0;

var DIRECTION_UP = "up";
var DIRECTION_DOWN = "down";
var DIRECTION_LEFT = "left";
var DIRECTION_RIGHT = "right";

// базовый класс дл€ всех персонажей
Unit = function() {
	// this.logger = new Logger("Unit");
	// идентификатор персонажа
	this.id = ++lastId;
	// позици€ на карте (координаты €чейки)
	this.x = 0;
	this.y = 0;
	this.nx = 0;
	this.ny = 0;
	//“екуща€ координата объекта на канвас используетс€ в анимации, не трогать
	this.cx = 0;
	this.cy = 0;
	// ¬рем€ за которое перемещаетс€ юнит на одну клетку 1 с (по умолчанию)
	this.timepermove = 1000;
	// скорость персонажа, сколько клеток проходит за 1 такт
	this.velocity = 0;
	// направление взгл€да персонажа : вверх, вних, влево, вправо
	// соответственно.
	this.direction = DIRECTION_UP;

	// передвинуть персонаж по текущему направлению
	this.move = function() {
		if (direction == DIRECTION_UP) {
			y--;
		} else if (direction == DIRECTION_DOWN) {
			y++;
		} else if (direction == DIRECTION_RIGHT) {
			x++;
		} else if (direction == DIRECTION_LEFT) {
			x--;
		}
	};

	// повернуть персонаж
	this.rotate = function(direction) {
		this.direction = direction;
	};

	this.makeATurn = function() {
		logger.logError('makeATurn not implemented');
	};
};