import EmojiPicker, {
  Emoji,
  EmojiStyle,
  Theme as EmojiTheme,
} from "emoji-picker-react";

import { ModelType } from "../store";

import BotIcon from "../icons/bot.svg";
import BlackBotIcon from "../icons/black-bot.svg";

export function getEmojiUrl(unified: string, style: EmojiStyle) {
  if(unified !="1f603")
  {
    return 'https://i.postimg.cc/nhrsg0fv/e9dbe9beec82d7114f9a3296122272f.jpg';
  }
  else
  {
    return `https://great.wzznft.com/i/2023/05/07/1157tmf.jpg`;
  }
}

export function AvatarPicker(props: {
  onEmojiClick: (emojiId: string) => void;
}) {
  return (
    <EmojiPicker
      lazyLoadEmojis
      theme={EmojiTheme.AUTO}
      getEmojiUrl={getEmojiUrl}
      onEmojiClick={(e) => {
        props.onEmojiClick(e.unified);
      }}
    />
  );
}

export function Avatar(props: { model?: ModelType; avatar?: string }) {
  if (props.model) {
    return (
      <div className="no-dark">
        {props.model?.startsWith("gpt-4") ? (
          <BlackBotIcon className="user-avatar" />
        ) : (
          <BotIcon className="user-avatar" />
        )}
      </div>
    );
  }

  return (
    <div className="user-avatar">
      {props.avatar && <EmojiAvatar avatar={props.avatar} />}
    </div>
  );
}

export function EmojiAvatar(props: { avatar: string; size?: number }) {
  return (
    <Emoji
      unified={props.avatar}
      size={props.size ?? 31.3}
      getEmojiUrl={getEmojiUrl}
    />
  );
}
