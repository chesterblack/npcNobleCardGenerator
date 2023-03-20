import { useRouter } from 'next/router';
import { npcs } from '@/lib/data';

export default function Selector({ npcName, setNpcName }) {
	const router = useRouter();
	let options = [];

	for (const [key, npc] of Object.entries(npcs)) {
		options.push(
			<option value={key} selected={npcName === key}>
				{npc.name}
			</option>
		);
	}

	return (
		<select
			onChange={(e) => {
				setNpcName(e.target.value);
			}}
			className="name"
		>
			{options}
		</select>
	);
}
