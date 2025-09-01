import React, { useState } from "react";
import devDotToIcon from "@/assets/images/socials/devdotto.svg";
import discordInIcon from "@/assets/images/socials/discord.svg";
import gitHubIcon from "@/assets/images/socials/github.svg";
import instagramIcon from "@/assets/images/socials/instagram.svg";
import linkedInIcon from "@/assets/images/socials/linkedin.svg";
import youTubeIcon from "@/assets/images/socials/youtube.svg";
import copyIcon from "@/assets/images/copy.svg";
import { Heart } from "lucide-react";

export interface FooterProps {
    devDotTo?: string;
    discordId?: string;
    email?: string;
    gitHub?: string;
    instagram?: string;
    linkedIn?: string;
    nickName: string;
    primaryColor?: string;
    youTube?: string;
}

const FooterFlmn: React.FC<FooterProps> = (props) => {
    const [copyText, setCopyText] = useState<string>("Copy email");
    const {
        devDotTo,
        discordId,
        email,
        gitHub,
        instagram,
        linkedIn,
        nickName,
        primaryColor,
        youTube,
    } = props;

    return (
        <div
            id="footer"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "2rem 0 1rem 0",
                backgroundColor: primaryColor,
                width: "100vw",
                color: "white",
                textAlign: "center",
            }}
        >
            <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="h-5 w-5 animate-pulse" />
                <p className="text-lg font-medium text-white">
                Obrigado por fazer parte desta nova fase!
                </p>
            </div>
            
            <p className="text-muted-white max-w-md mx-auto">
                Cada gesto de carinho nos ajuda a construir um lar cheio de amor e memórias especiais.
            </p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "3rem",
                }}
            >
                {linkedIn && (
                    <a
                        href={`https://www.linkedin.com/in/${linkedIn}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
                    </a>
                )}
                {devDotTo && (
                    <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
                        <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
                    </a>
                )}
                {gitHub && (
                    <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
                        <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
                    </a>
                )}
                {instagram && (
                    <a
                        href={`https://www.instagram.com/${instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={instagramIcon} alt="Instagram" className="socialIcon" />
                    </a>
                )}
                {youTube && (
                    <a
                        href={`https://www.youtube.com/c/${youTube}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
                    </a>
                )}
                {discordId && (
                    <a
                        href={`https://discordid.netlify.app/?id=${discordId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={discordInIcon} alt="Discord" className="socialIcon" />
                    </a>
                )}
            </div>
            <p className="small" style={{ marginTop: 0, textAlign: "center", color: "white" }}>
                {email && (
                    <div style={{ display: "flex" }}>
                        Me envie email em<a className="email" href={`mailto:${email}`}>{email}</a>
                        <div className="tooltip">
                            <button
                                className="unbuttonize"
                                onClick={() => {
                                    setCopyText("Copiado!");
                                    navigator.clipboard.writeText(email);
                                }}
                                onMouseLeave={() => {
                                    setCopyText("Copiar email");
                                }}
                            >
                                <img src={copyIcon} alt="copyIcon" className="copyIcon" />
                            </button>
                            <span className="copyTooltip">{copyText}</span>
                        </div>
                    </div>
                )}
                <div>
                    {new Date().getFullYear()} — <strong>{nickName}</strong>
                </div>
            </p>
        </div>
    );
};

export default FooterFlmn;
