export function Profile() {
    const avatar = "https://th.bing.com/th/id/R.23e3f025682e1dff281c9a66741d6695?rik=ofJoN06JmSK%2bBg&pid=ImgRaw&r=0"
    const description = "Michael Jackson"
    return (
        <>
        <h1> Foto de {description} </h1>
        <img
            src= {avatar}
            alt= {description}
            className="Foto"
        />
        </>
    );
};