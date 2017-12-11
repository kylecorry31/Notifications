all: compile


compile:
	sass --update scss:.

watch:
	sass --watch scss:.

clean:
	rm notifications.css notifications.css.map
