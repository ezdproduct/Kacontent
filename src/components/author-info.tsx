interface AuthorInfoProps {
    avatar: string;
    name: string;
    date: string;
}

export const AuthorInfo = ({ avatar, name, date }: AuthorInfoProps) => {
    return (
        <div className="flex items-center gap-3 mt-auto">
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
            <div>
                <p className="font-semibold text-foreground">{name}</p>
                <p className="text-sm text-muted-foreground">{date}</p>
            </div>
        </div>
    );
};