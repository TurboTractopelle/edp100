import TimelineHistory from "./TimelineHistory";
import { shallow, mount } from "enzyme";
import React from "react";

describe("TimelineHistory", () => {
	const wrapper = mount(<TimelineHistory />);
	it("works", () => {
		console.log(wrapper.debug());
		expect(2).toBe(2);
	});
});
