import {
	Timeline,
	TimelineContent,
	TimelineDate,
	TimelineHeader,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle,
} from "@/components/ui/timeline";
import { FaCheck } from "react-icons/fa";

const items = [
	{
		id: 1,
		date: "15 minutes ago",
		title: "Forked Repository",
		description: "Forked the repository to create a new branch for development.",
	},
	{
		id: 2,
		date: "10 minutes ago",
		title: "Pull Request Submitted",
		description:
			"Submitted PR #342 with new feature implementation. Waiting for code review from team leads.",
	},
	{
		id: 3,
		date: "5 minutes ago",
		title: "Comparing Branches",
		description:
			"Received comments on PR. Minor adjustments needed in error handling and documentation.",
	},
	{
		id: 4,
		title: "Merged Branch",
		description: "Merged the feature branch into the main branch. Ready for deployment.",
	},
];

export default function TimeLineTracking() {
	
	return (
		<Timeline defaultValue={3}>
			{items.map((item) => (
				<TimelineItem
					key={item.id}
					step={item.id}
					className="group-data-[orientation=vertical]/timeline:ms-10 "
				>
					<TimelineHeader>
						<TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7  group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
						<TimelineTitle className="mt-0.5 text-lg font-semibold">{item.title}</TimelineTitle>
						<TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-red-400 group-data-completed/timeline-item:text-gray-600 flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
							<FaCheck size={14} className="text-gray-500" />
						</TimelineIndicator>
					</TimelineHeader>
					<TimelineContent>
						{item.description}
						<TimelineDate className="mt-2 mb-0">{item.date}</TimelineDate>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
}
