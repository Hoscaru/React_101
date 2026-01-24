function Avatar({ persona, size }) {
    return (
        <img
            src={persona.imageURL}
            alt={persona.name}
            className="Foto"
            width={size}
        />
    );
}

export function Profile() {
    return (
        <>
            <Avatar
                persona={
                    {
                        name: "Michael Jackson",
                        imageURL: "https://th.bing.com/th/id/R.23e3f025682e1dff281c9a66741d6695?rik=ofJoN06JmSK%2bBg&pid=ImgRaw&r=0"
                    }
                }
                size={500}

            />
            <Avatar
                persona={
                    {
                        name: "Vicente Fernandez",
                        imageURL: "https://th.bing.com/th/id/OIP.PofhvazYTSNrXlCd6LaR6QHaHa?w=154&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
                    }
                }
                size={500}

            />
        </>
    );
};