import pygame
import sys

# Define the alien class
class Alien:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.velocity = 5
        self.bullets = []
        self.shoot_cooldown = 0
        self.direction = 1  # 1 for right, -1 for left
        self.can_shoot = False  # Will be set to True for the bottom row aliens

    def draw(self, window):
        pygame.draw.rect(window, (255, 255, 255), (self.x, self.y, 20, 20))
        for bullet in self.bullets:
            bullet.draw(window)

    def shoot(self):
    # Aliens shoot bullets at regular intervals
        if self.can_shoot and self.shoot_cooldown == 0:
            self.bullets.append(Bullet(self.x + 10, self.y + 20))  # Adjust bullet position
            self.shoot_cooldown = 1

# Define the bullet class
class Bullet:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.velocity = 3

    def draw(self, window):
        pygame.draw.rect(window, (255, 255, 255), (self.x, self.y, 7, 15))

    def move(self):
        self.y -= self.velocity

# Define the spaceship class
class Spaceship:
    def __init__(self):
        self.x = 300
        self.y = 500
        self.velocity = 5
        self.bullets = []
        self.shoot_cooldown = 0

    def draw(self, window):
        pygame.draw.polygon(window, (255, 0, 0), [(self.x, self.y), (self.x - 10, self.y + 25), (self.x + 10, self.y + 25)])
        for bullet in self.bullets:
            bullet.draw(window)

    def move(self):
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            self.x -= self.velocity
        if keys[pygame.K_RIGHT]:
            self.x += self.velocity

    def shoot(self):
        keys = pygame.key.get_pressed()
        if keys[pygame.K_SPACE] and self.shoot_cooldown == 0:
            self.bullets.append(Bullet(self.x, self.y))
            self.shoot_cooldown = 1


# Initialize Pygame
pygame.init()

# Create a window
win = pygame.display.set_mode((600, 600))

# Create a spaceship
#la variabile contine la classe e quindi ne eredita tutti i metodi
spaceship = Spaceship()

aliens = []
for i in range(3):
    for j in range(6):
        alien = Alien(100 + j * 50, 100 + i * 50)
        if i == 2:  # Bottom row
            alien.can_shoot = True
        aliens.append(alien)



# Game loop
while True:
    pygame.time.delay(10)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    win.fill((0, 0, 0))
    spaceship.move()
    spaceship.draw(win)
    
    # spaceship specifics
    if spaceship.shoot_cooldown > 0:
        spaceship.shoot_cooldown += 1
    if spaceship.shoot_cooldown > 15:  # After 15 frames, allow shooting again
        spaceship.shoot_cooldown = 0
    spaceship.shoot()
    for bullet in spaceship.bullets:
        bullet.move()

    # aliens specifics
    for alien in aliens:
        alien.x += alien.direction * alien.velocity
        if alien.x > 550:  # Right extreme
            alien.direction = -1
            alien.y += 5  # Move down
        elif alien.x < 50:  # Left extreme
            alien.direction = 1
            alien.y += 5  # Move down
        alien.draw(win)
        if alien.can_shoot:
            if alien.shoot_cooldown > 0:
                alien.shoot_cooldown += 1
            if alien.shoot_cooldown > 30:  # After 30 frames, allow shooting again
                alien.shoot_cooldown = 0
                alien.shoot()
                
        for bullet in alien.bullets:
            if bullet.y > spaceship.y and bullet.y < spaceship.y + 25:
                if bullet.x > spaceship.x and bullet.x < spaceship.x + 20:
                    # Spaceship hit by alien bullet: End the game
                    pygame.quit()
                    sys.exit()


    pygame.display.update()