try {
    const a = 2
    a = 3
} catch (err) {
    throw new Error('Error with const variable')
} finally {
    console.log('done')
}