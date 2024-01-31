import pygame, sys, random

def ball_movement():
	global ball_speed_x, ball_speed_y
	
	ball.x += ball_speed_x
	ball.y += ball_speed_y

	if ball.top <= 0 or ball.bottom >= screen_height:
		ball_speed_y *= -1
	if ball.left <= 0 or ball.right >= screen_width:
		ball_start()

	if ball.colliderect(player) or ball.colliderect(opponent):
		ball_speed_x *= -1

def player_movement():
	player.y += player_speed

	if player.top <= 0:
		player.top = 0
	if player.bottom >= screen_height:
		player.bottom = screen_height

def opponent_movement():
	if opponent.top < ball.y:
		opponent.y += opponent_speed
	if opponent.bottom > ball.y:
		opponent.y -= opponent_speed

	if opponent.top <= 0:
		opponent.top = 0
	if opponent.bottom >= screen_height:
		opponent.bottom = screen_height

def ball_start():
	global ball_speed_x, ball_speed_y

	ball.center = (screen_width/2, screen_height/2)
	ball_speed_y *= random.choice((1,-1))
	ball_speed_x *= random.choice((1,-1))


pygame.init()
clock = pygame.time.Clock()


screen_width = 1200
screen_height = 800
screen = pygame.display.set_mode((screen_width,screen_height))
pygame.display.set_caption('Pong')

# Game Rectangles
ball = pygame.Rect(screen_width / 2 - 15, screen_height / 2 - 15, 30, 30)
player = pygame.Rect(screen_width - 20, screen_height / 2 - 70, 10,140)
opponent = pygame.Rect(10, screen_height / 2 - 70, 10,140)

# Game Variables
ball_speed_x = 7 * random.choice((1,-1))
ball_speed_y = 7 * random.choice((1,-1))
player_speed = 0
opponent_speed = 10
movement_speed = 10

while True:
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			pygame.quit()
			sys.exit()
		if event.type == pygame.KEYDOWN:
			if event.key == pygame.K_UP:
				player_speed = -movement_speed
			if event.key == pygame.K_DOWN:
				player_speed = movement_speed
		if event.type == pygame.KEYUP:
			player_speed=0
	
	#Game Logic
	ball_movement()
	player_movement()
	opponent_movement()

	# Visuals 
	screen.fill(pygame.Color('black'))
	pygame.draw.rect(screen, pygame.Color('white'), player)
	pygame.draw.rect(screen, pygame.Color('white'), opponent)
	pygame.draw.ellipse(screen, pygame.Color('white'), ball)
	pygame.draw.aaline(screen, pygame.Color('white'), (screen_width / 2, 0),(screen_width / 2, screen_height))

	# Updating the window
	pygame.display.flip()
	clock.tick(60)