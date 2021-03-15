interface HeaderProps {
    selectedGenre: {
        title: String
    }
}

export function Header(props: HeaderProps) {
    return (
        <header>
            <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
        </header>
    )
}