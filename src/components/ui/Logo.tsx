import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export function Logo({ className = "", width = 40, height = 40 }: LogoProps) {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <Image
                src="/logo.png"
                alt="Harrington Ecobuild Logo"
                width={width}
                height={height}
                className="object-contain"
                priority
            />
        </div>
    );
}
