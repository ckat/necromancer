var lastId = 0;

var DIRECTION_UP = "up";
var DIRECTION_DOWN = "down";
var DIRECTION_LEFT = "left";
var DIRECTION_RIGHT = "right";

// ������� ����� ��� ���� ����������
Unit = function() {
	// this.logger = new Logger("Unit");
	// ������������� ���������
	this.id = ++lastId;
	// ������� �� ����� (���������� ������)
	this.x = 0;
	this.y = 0;
	this.nx = 0;
	this.ny = 0;
	//������� ���������� ������� �� ������ ������������ � ��������, �� �������
	this.cx = 0;
	this.cy = 0;
	// ����� �� ������� ������������ ���� �� ���� ������ 1 � (�� ���������)
	this.timepermove = 1000;
	// �������� ���������, ������� ������ �������� �� 1 ����
	this.velocity = 0;
	// ����������� ������� ��������� : �����, ����, �����, ������
	// ��������������.
	this.direction = DIRECTION_UP;

	// ����������� �������� �� �������� �����������
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

	// ��������� ��������
	this.rotate = function(direction) {
		this.direction = direction;
	};

	this.makeATurn = function() {
		logger.logError('makeATurn not implemented');
	};
};