import Image from "next/image";

type BushClickProps = {
    onClick: () => void;
}

export default function BushClick({ onClick }: BushClickProps) {
    return(
        <button onClick = {onClick}>
            <Image src="/bush1.png" alt="bush" width={512} height={512} />
        </button>
    )
}