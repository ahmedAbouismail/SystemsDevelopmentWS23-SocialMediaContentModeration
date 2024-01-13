# type in make to start both stacks
default: start

# Define how to start django
start-django:
	@echo "Starting Django Server..."
	@cd backend && python manage.py runserver

# Define how to start react
start-react:
	@echo "Starting React App..."
	@cd frontend && npm start

# Define shortcut to start both django and react
start:
	@make -j2 start-django start-react

restart:
	docker-compose build --no-cache
	docker-compose up --force-recreate