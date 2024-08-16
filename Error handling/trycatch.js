try {
    const a = 2
    a = 3
} catch (err) {
    console.log(err)
} finally {
    console.log('done')
}