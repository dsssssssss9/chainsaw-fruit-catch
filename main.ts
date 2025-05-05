input.onButtonPressed(Button.B, function () {
    if (player.get(LedSpriteProperty.X) < 4) {
        player.change(LedSpriteProperty.X, 1)
    }
})
input.onButtonPressed(Button.A, function () {
    if (player.get(LedSpriteProperty.X) > 0) {
        player.change(LedSpriteProperty.X, -1)
    }
})
let fruit: game.LedSprite = null
let player: game.LedSprite = null
let delay = 1000
player = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    fruit = game.createSprite(randint(0, 4), 0)
    basic.pause(delay)
    while (fruit.get(LedSpriteProperty.Y) < 4) {
        fruit.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(delay)
    if (player.isTouching(fruit)) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
    fruit.set(LedSpriteProperty.Brightness, 0)
    delay = delay - delay / 10
})
