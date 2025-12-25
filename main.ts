let LLENYA_PER_GALLINA = 6
let LLENYA_PER_PATATA = 2 / 1.5
let LLENYA_PER_CABRA = 5
let LLENYA_PER_OUS = 3 / 12
let LLENYA_PER_CAVALL = 12
let gallines = 0
let kg_llenya = 0
let ous = 0
let cabres = 0
let caballs = 0
let patates = 0
let house_bottom = 0
let house_top = 0
let house_right = 0
let house_left = 0
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    animation.runImageAnimation(nena, assets.animation`
            nena-animation-up
            `, 500, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    BackPack = [miniMenu.createMenuItem("Gallina"), miniMenu.createMenuItem("Patata"), miniMenu.createMenuItem("Cabra"), miniMenu.createMenuItem("Ous"), miniMenu.createMenuItem("Caball"), miniMenu.createMenuItem("Tancar Menú")]
    myMenu = miniMenu.createMenuFromArray(BackPack)
    myMenu.setTitle("Conversor")
    myMenu.setPosition(69, 48)
    myMenu.onButtonPressed(controller.B, function on_button_pressed(selection: any, selectedIndex: any) {
        myMenu.close()
    })
    myMenu.setFrame(img`
        999999999999999999999999999999999999999999999999
        999988899999999999998889999999999999888999999999
        998888888999888899888888899988889988888889998889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988888888888888888888888888888888888888888888889
        988688888888888888888888888888888888888886888889
        988688888888688888888888888888888868888866888889
        988668888888668888888888888888888868888886888689
        966688888888688888888888888688888866888866688689
        986668888886668888688888888688888668888866886689
        988666888888688888688888886668888866888666688689
        966688888866666888668888886688888866688866886669
        986666888866668886666888866666886668888666686689
        986666888866668888668888886688888666888666666669
        966668888666666886666888866666886666866666666669
        986688886666668886666888666668886666666666666669
        966666688666666666666666666666666666666666666669
        966666886666666666666666666666666666666666666669
        966666666666666666666666666666666666666666666669
        999999999999999999999999999999999999999999999999
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    animation.runImageAnimation(nena, assets.animation`
            nena-animation-right
            `, 500, false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    animation.runImageAnimation(nena, assets.animation`
            nena-animation-left
            `, 500, false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    animation.runImageAnimation(nena, assets.animation`
            nena-animation-down
            `, 500, false)
})
let myMenu : miniMenu.MenuSprite = null
let BackPack : miniMenu.MenuItem[] = []
let nena : Sprite = null
let MODE_GAME = 0
let casa = sprites.create(img`
        ....................8a8aa8a8....................
        .................aaa888aa8a8aaa.................
        ..............aaa8aa8a8aa888aa8aaa..............
        ...........8aa8aa8888a8aa8a8888aa8aa8...........
        ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
        .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
        ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
        dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
        bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
        dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
        dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
        dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
        bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
        dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
        dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
        dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
        bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
        dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
        dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
        dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
        bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
        dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
        dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
        dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
        bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
        dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
        dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
        dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
        ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
        bddddddddddddbcddddddddddddddddddcbddddddddddddb
        bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
        bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
        bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
        bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
        bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
        bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
        bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
        bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
        bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
        cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
        cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
        ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
        .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
        ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
        ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
        ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
        .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
        ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
        `, SpriteKind.Player)
casa.setPosition(26, 87)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
    ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
    fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
    ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
    f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
    ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
    ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
    fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
    ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
    fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
    ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
    ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
    fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
    ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
    bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
    bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
    bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
    3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
    333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
    cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
    cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
    cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
    bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
    bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
    dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
    dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
    dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
    ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
    ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
    ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
    ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
    d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
    333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
    33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
    33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
    d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
    ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
    b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
    bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
    bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
    b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
    dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
    dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
    dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
    dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
    3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
    33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `)
let MODE_MENU2 = 1
let MODE_INVENTORY = 2
let mode_joc2 = MODE_GAME
let arbre2 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
arbre2.setPosition(4, 31)
let a3 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a3.setPosition(15, 31)
let a10 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a10.setPosition(30, 31)
let a11 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a11.setPosition(45, 31)
let a4 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a4.setPosition(60, 31)
let a5 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a5.setPosition(70, 31)
let a6 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a6.setPosition(85, 31)
let a7 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a7.setPosition(100, 31)
let a8 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a8.setPosition(115, 31)
let a9 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a9.setPosition(130, 31)
let a13 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a13.setPosition(145, 31)
let a12 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a12.setPosition(155, 31)
nena = sprites.create(assets.image`
    nena-front
    `, SpriteKind.Player)
nena.setStayInScreen(true)
controller.moveSprite(nena, 100, 100)
game.onUpdate(function on_on_update() {
    let dist_left: number;
    let dist_right: number;
    let dist_top: number;
    let dist_bottom: number;
    let min_horizontal: number;
    let min_vertical: number;
    let min_dist: number;
    
    if (nena.y < 40) {
        nena.y = 40
    }
    
    house_left = casa.x - 23
    house_right = casa.x + 23
    house_top = casa.y - 20
    house_bottom = casa.y + 20
    if (nena.x > house_left && nena.x < house_right && nena.y > house_top && nena.y < house_bottom) {
        dist_left = Math.abs(nena.x - house_left)
        dist_right = Math.abs(nena.x - house_right)
        dist_top = Math.abs(nena.y - house_top)
        dist_bottom = Math.abs(nena.y - house_bottom)
        min_horizontal = Math.min(dist_left, dist_right)
        min_vertical = Math.min(dist_top, dist_bottom)
        min_dist = Math.min(min_horizontal, min_vertical)
        if (min_dist == dist_left) {
            nena.x = house_left - 5
        } else if (min_dist == dist_right) {
            nena.x = house_right + 5
        } else if (min_dist == dist_top) {
            nena.y = house_top - 5
        } else if (min_dist == dist_bottom) {
            nena.y = house_bottom + 5
        }
        
    }
    
})
function fer_intercanvi(opcio: string) {
    
    if (opcio == "Gallina" && kg_llenya >= LLENYA_PER_GALLINA) {
        kg_llenya -= LLENYA_PER_GALLINA
        gallines += 1
    } else if (opcio == "Patata" && kg_llenya >= 2) {
        kg_llenya -= 2
        patates += 1.5
    } else if (opcio == "Cabra" && kg_llenya >= LLENYA_PER_CABRA) {
        kg_llenya -= LLENYA_PER_CABRA
        cabres += 1
    } else if (opcio == "Ous" && kg_llenya >= 3) {
        kg_llenya -= 3
        ous += 12
    } else if (opcio == "Caball" && kg_llenya >= LLENYA_PER_CAVALL) {
        kg_llenya -= LLENYA_PER_CAVALL
        caballs += 1
    }
    
}

