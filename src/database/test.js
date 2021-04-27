const Database = require('./db');

Database.then(async db => {
    // inserir dados na tabela
    await db.run(
        `INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-23.5841847",
            "-46.6516358",
            "Lar Das Crianças 1",
            "Presta assistência",
            "984521347"
            "https://images.unsplash.com/photo-1598454444233-9dc334394ed3?ixlib=rb-1.2.1&q=80&fm=jpg",
            "Venha e se sinta avontade para trazer amor e carinho",
            "Horario de visitas das 8 as 18",
            "1"
        );
    `)

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanage WHERE id = "2"')
    console.log(orphanage)
})