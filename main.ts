//  CONVERSOR RURAL
//  Marcel Roquet
//  DAM2
//  limits de la casa 
let house_bottom = 0
let house_top = 0
let house_right = 0
let house_left = 0
//  llista d'arbres per limitar mapa i tallar llenya 
let arbres : Sprite[] = []
//  Variables del sistema de menús
let opcio2 = ""
let myMenu : miniMenu.MenuSprite = null
let labels : string[] = []
let quantitat2 = 0
let menu_quantitat : miniMenu.MenuSprite = null
let opcions_text : string[] = []
let opcions_vals : number[] = []
let producte_seleccionat = ""
//  control del joc
let VELOCITAT_ATURADA = 0
let menu_obert = false
let VELOCITAT_NORMAL = 0
//  Sprites arbres 
let a12 : Sprite = null
let a13 : Sprite = null
let a9 : Sprite = null
let a8 : Sprite = null
let a7 : Sprite = null
let a6 : Sprite = null
let a5 : Sprite = null
let a4 : Sprite = null
let a11 : Sprite = null
let a10 : Sprite = null
let a3 : Sprite = null
let arbre2 : Sprite = null
//  constants del joc 
let MODE_GAME = 0
let LLENYA_PER_PAQUET_OUS = 3
let LLENYA_PER_GALLINA = 6
let LLENYA_PER_CABRA = 5
let LLENYA_PER_CAVALL = 12
let LLENYA_PER_PATATA = 2 / 1.5
let LLENYA_TALLADA = 5
let DISTANCIA_ARBRE = 18
let kg_llenya = 0
// recursos del jugador
kg_llenya = 0
let gallines = 0
let patates = 0
let cabres = 0
let ous = 0
let caballs = 0
// personantge i objectes
let nena : Sprite = null
let BackPack : number[] = []
// CANVIAR animació de la nena quan es mou amunt 
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    animation.runImageAnimation(nena, assets.animation`
            nena-animation-up
            `, 500, false)
})
//  funcio per tallar llenya quan estigui a prop dels arbres
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
    //  que no es pugui fer amb el menú obert
    if (menu_obert) {
        return
    }
    
    if (!esta_a_prop_d_un_arbre()) {
        return
    }
    
    kg_llenya += LLENYA_TALLADA
    kg_llenya = Math.roundWithPrecision(kg_llenya, 2)
    mostrar_missatge("Has tallat " + ("" + ("" + LLENYA_TALLADA)) + " kg de llenya")
    mostrar_missatge("Total llenya: " + ("" + ("" + kg_llenya)) + " kg")
})
// funcio per utilitzar el submenú 
function obrir_menu_quantitat(producte: string) {
    
    let items : miniMenu.MenuItem[] = []
    menu_obert = true
    controller.moveSprite(nena, VELOCITAT_ATURADA, VELOCITAT_ATURADA)
    producte_seleccionat = producte
    // dos arrays un de view i l'altre de llógica 
    opcions_vals = [1, 2, 3, 5, 10]
    opcions_text = ["1", "2", "3", "5", "10", "Tornar"]
    for (let opcio of opcions_text) {
        items.push(miniMenu.createMenuItem(opcio))
    }
    menu_quantitat = miniMenu.createMenuFromArray(items)
    menu_quantitat.setTitle("Quantitat de " + producte)
    menu_quantitat.setPosition(70, 50)
    //  funció que s'ulititza quan el usuari a seleccionat una opció del submenú, s'apliquen els canvis i el moures esta actiu 
    menu_quantitat.onButtonPressed(controller.A, function on_button_pressed(selection: any, selected_index: number) {
        
        menu_quantitat.close()
        menu_obert = false
        controller.moveSprite(nena, VELOCITAT_NORMAL, VELOCITAT_NORMAL)
        if (selected_index == 5) {
            return
        }
        
        quantitat2 = opcions_vals[selected_index]
        fer_intercanvi_amb_quantitat(producte, quantitat2)
    })
    // aquesta funció tanca directrament el submenú quen es prem B
    menu_quantitat.onButtonPressed(controller.B, function on_button_pressed2(selection2: any, selected_index2: any) {
        
        menu_quantitat.close()
        menu_obert = false
        controller.moveSprite(nena, VELOCITAT_NORMAL, VELOCITAT_NORMAL)
    })
}

//  activa el menú 
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    // crea una llista amb els items del miniMenun
    let items2 : miniMenu.MenuItem[] = []
    // si ja esta obert no volem accdecir així que return 
    if (menu_obert) {
        return
    }
    
    // sino indiquem amb un true que si 
    menu_obert = true
    controller.moveSprite(nena, VELOCITAT_ATURADA, VELOCITAT_ATURADA)
    labels = ["Gallina", "Racions Patata", "Cabra", "Dotzena d'Ous", "Caball", "Veure Inventari", "Tancar Menú"]
    // aqui gestiona la selecció del que vol el usuari
    for (let l of labels) {
        items2.push(miniMenu.createMenuItem(l))
    }
    myMenu = miniMenu.createMenuFromArray(items2)
    myMenu.setTitle("CONVERSOR RURAL")
    myMenu.setPosition(69, 48)
    //  s'obre el submenú per seleccionar la quantitat
    myMenu.onButtonPressed(controller.A, function on_button_pressed3(selection3: any, selectedIndex: number) {
        
        opcio2 = labels[selectedIndex]
        //  per veure la opcio seleccionada 
        if (opcio2 == "Tancar Menú") {
            myMenu.close()
            //  per indicar que no hiha més menús oberts
            menu_obert = false
            controller.moveSprite(nena, VELOCITAT_NORMAL, VELOCITAT_NORMAL)
        } else if (opcio2 == "Veure Inventari") {
            myMenu.close()
            menu_obert = false
            controller.moveSprite(nena, VELOCITAT_NORMAL, VELOCITAT_NORMAL)
            // mostra el inventari
            mostrar_inventari()
        } else {
            myMenu.close()
            // es tanca el menu actual 
            obrir_menu_quantitat(opcio2)
        }
        
    })
    // tanca el menú si es clica B 
    myMenu.onButtonPressed(controller.B, function on_button_pressed4(selection22: any, selectedIndex2: any) {
        
        myMenu.close()
        menu_obert = false
        controller.moveSprite(nena, VELOCITAT_NORMAL, VELOCITAT_NORMAL)
    })
})
// canvi d'animació cap a la dreta
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    animation.runImageAnimation(nena, assets.animation`
            nena-animation-right
            `, 500, false)
})
// funció per mostrar tots els textos, reb el missatge i el mostra bonic
function mostrar_missatge(text: string) {
    game.showLongText(text, DialogLayout.Bottom)
}

// canvi d'animació al anar cap a la dreta
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    animation.runImageAnimation(nena, assets.animation`
            nena-animation-left
            `, 500, false)
})
// canvi d'animació al baixar 
controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    animation.runImageAnimation(nena, assets.animation`
            nena-animation-down
            `, 500, false)
})
// només per veure els teus productes 
function mostrar_inventari() {
    let info_text = "TEU INVENTARI\n"
    info_text = "" + info_text + "══════════════════\n"
    info_text = "" + info_text + "Llenya: " + ("" + ("" + Math.roundWithPrecision(kg_llenya, 2))) + " kg\n"
    info_text = "" + info_text + "Gallines: " + ("" + ("" + gallines)) + "\n"
    info_text = "" + info_text + "Patates: " + ("" + ("" + Math.roundWithPrecision(patates, 2))) + " kg\n"
    info_text = "" + info_text + "Cabres: " + ("" + ("" + cabres)) + "\n"
    info_text = "" + info_text + "Ous: " + ("" + ("" + ous)) + "\n"
    info_text = "" + info_text + "Cavalls: " + ("" + ("" + caballs)) + "\n"
    info_text = "" + info_text + "══════════════════"
    game.showLongText(info_text, DialogLayout.Full)
}

// detectar si pots tallar arbres 
function esta_a_prop_d_un_arbre(): boolean {
    
    arbres = [arbre2, a3, a10, a11, a4, a5, a6, a7, a8, a9, a12, a13]
    for (let arbre of arbres) {
        if (nena.overlapsWith(arbre)) {
            return true
        }
        
    }
    return false
}

// llogica per intercanvi, converteix llenya a productes 
function fer_intercanvi_amb_quantitat(producte2: string, quantitat: number) {
    let llenya_necesaria: number;
    
    if (producte2 == "Gallina") {
        llenya_necesaria = quantitat * LLENYA_PER_GALLINA
    } else if (producte2 == "Racions Patata") {
        llenya_necesaria = quantitat * 2
    } else if (producte2 == "Cabra") {
        llenya_necesaria = quantitat * LLENYA_PER_CABRA
    } else if (producte2 == "Dotzena d'Ous") {
        llenya_necesaria = quantitat * LLENYA_PER_PAQUET_OUS
    } else if (producte2 == "Caball") {
        llenya_necesaria = quantitat * LLENYA_PER_CAVALL
    } else {
        llenya_necesaria = 0
    }
    
    llenya_necesaria = Math.roundWithPrecision(llenya_necesaria, 2)
    // comproba que tinguis la llenya necessaria 
    if (kg_llenya >= llenya_necesaria) {
        kg_llenya += 0 - llenya_necesaria
        kg_llenya = Math.roundWithPrecision(kg_llenya, 2)
        // si l'has tingut mostra el resultat 
        if (producte2 == "Gallina") {
            gallines += quantitat
            mostrar_missatge("Has obtingut " + ("" + ("" + quantitat)) + " gallina(s)")
            mostrar_missatge("Cost: " + ("" + ("" + llenya_necesaria)) + " kg llenya")
        } else if (producte2 == "Racions Patata") {
            patates += quantitat * 1.5
            patates = Math.roundWithPrecision(patates, 2)
            mostrar_missatge("Has obtingut " + ("" + ("" + quantitat * 1.5)) + " kg patates")
            mostrar_missatge("Cost: " + ("" + ("" + llenya_necesaria)) + " kg llenya")
        } else if (producte2 == "Cabra") {
            cabres += quantitat
            mostrar_missatge("Has obtingut " + ("" + ("" + quantitat)) + " cabra(s)")
            mostrar_missatge("Cost: " + ("" + ("" + llenya_necesaria)) + " kg llenya")
        } else if (producte2 == "Dotzena d'Ous") {
            ous += quantitat * 12
            mostrar_missatge("Has obtingut " + ("" + ("" + quantitat * 12)) + " ous")
            mostrar_missatge("Cost: " + ("" + ("" + llenya_necesaria)) + " kg llenya")
        } else if (producte2 == "Caball") {
            caballs += quantitat
            mostrar_missatge("Has obtingut " + ("" + ("" + quantitat)) + " caball(s)")
            mostrar_missatge("Cost: " + ("" + ("" + llenya_necesaria)) + " kg llenya")
        }
        
        mostrar_inventari()
    } else {
        mostrar_missatge("No tens prou llenya!")
        mostrar_missatge("Necessites: " + ("" + ("" + llenya_necesaria)) + " kg")
        mostrar_missatge("Tens: " + ("" + ("" + kg_llenya)) + " kg")
    }
    
}

//  Variables per el submenu
VELOCITAT_NORMAL = 100
controller.moveSprite(nena, VELOCITAT_NORMAL, VELOCITAT_NORMAL)
let quantitat_actual = 1
function fer_intercanvi(opcio3: any) {
    
    if (opcio3 == "Gallina" && kg_llenya >= LLENYA_PER_GALLINA) {
        kg_llenya += 0 - LLENYA_PER_GALLINA
        gallines += 1
    } else if (opcio3 == "Racions Patata" && kg_llenya >= 2) {
        kg_llenya += 0 - 2
        patates += 1.5
    } else if (opcio3 == "Cabra" && kg_llenya >= LLENYA_PER_CABRA) {
        kg_llenya += 0 - LLENYA_PER_CABRA
        cabres += 1
    } else if (opcio3 == "Dotzena d'Ous" && kg_llenya >= 3) {
        kg_llenya += 0 - 3
        ous += 12
    } else if (opcio3 == "Caball" && kg_llenya >= LLENYA_PER_CAVALL) {
        kg_llenya += 0 - LLENYA_PER_CAVALL
        caballs += 1
    }
    
    kg_llenya = Math.roundWithPrecision(kg_llenya, 2)
    patates = Math.roundWithPrecision(patates, 2)
}

// creació sprites
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
arbre2 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
arbre2.setPosition(4, 31)
a3 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a3.setPosition(15, 31)
a10 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a10.setPosition(30, 31)
a11 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a11.setPosition(45, 31)
a4 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a4.setPosition(60, 31)
a5 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a5.setPosition(70, 31)
a6 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a6.setPosition(85, 31)
a7 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a7.setPosition(100, 31)
a8 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a8.setPosition(115, 31)
a9 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a9.setPosition(130, 31)
a13 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a13.setPosition(145, 31)
a12 = sprites.create(assets.image`
    forestTree1
    `, SpriteKind.Player)
a12.setPosition(155, 31)
nena = sprites.create(assets.image`
    nena-front
    `, SpriteKind.Player)
nena.setPosition(21, 105)
nena.setStayInScreen(true)
controller.moveSprite(nena, VELOCITAT_NORMAL, VELOCITAT_NORMAL)
//  per a que s'executi a cada frame 
game.onUpdate(function on_on_update() {
    let dist_left: number;
    let dist_right: number;
    let dist_top: number;
    let dist_bottom: number;
    let min_horizontal: number;
    let min_vertical: number;
    let min_dist: number;
    
    // evitar que la nena no vagi més enllá dels arbres 
    if (nena.y < 40) {
        nena.y = 40
    }
    
    //  per no poder passra per sobre de la casa 
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
        // llançar el personatge cap a fora si intentea passra per sobres 
        if (min_dist == dist_left) {
            nena.x = house_left - 5
        } else if (min_dist == dist_right) {
            nena.x = house_right + 5
        } else if (min_dist == dist_top) {
            nena.y = house_top - 5
        } else if (min_dist == dist_bottom) {
            nena.y = house_bottom + 5
            // si está a sota, mostrar el missatge inicial del joc 
            game.showLongText(`
                    BON NADAL.
                    BENVINGUT/DA AL CONVERSOR RURAL!
                    
                    Prem A per obrir el menú de conversió.
                    Prem B per tallar llenya
                    `, DialogLayout.Full)
            game.showLongText(`
                    TAULA DE CONVERSIO:
                    6 kg llenya = 1 gallina
                    2 kg llenya = 1.5 kg patates
                    5 kg llenya = 1 cabra
                    3 kg llenya = 12 ous
                    12 kg llenya = 1 cavall
                    `, DialogLayout.Full)
            game.showLongText(`
                    AVÍS:
                    Una ració de patates equival a 1,5 Kg de patates
                    Una dotzena d'ous equivalen a 12 ous.
                    Aquestes son les racions mínimes que es poden adquirir
                    `, DialogLayout.Full)
        }
        
    }
    
})
