import React from 'react';
import renderer from 'react-test-renderer';
import { Text, ActivityIndicator, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import OfferFeed from "./OfferFeed";
import OfferFeedItem from "../../components/OfferFeedItem/OfferFeedItem";

// Mock necessary hooks and components
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('../../components/OfferFeedItem/OfferFeedItem', () => {
  return 'OfferFeedItem';
});

describe('OfferFeed', () => {
  const mockUseSelector = useSelector as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component correctly', () => {
    mockUseSelector.mockReturnValue({ data: [], loading: false, error: null });
    const tree = renderer.create(<OfferFeed />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays a loader when loading', () => {
    mockUseSelector.mockReturnValue({ data: [], loading: true, error: null });
    const tree = renderer.create(<OfferFeed />);
    const loader = tree.root.findByType(ActivityIndicator);
    expect(loader).toBeTruthy();
  });

  it('renders a list of offers when data is available', () => {
    const mockData = [
      { id: '1', retailerLogo: 'https://example.com/logo1.png', title: 'Offer 1', expirationDate: '2024-12-31', description: 'Description 1', cashbackAmount: 5 },
      { id: '2', retailerLogo: 'https://example.com/logo2.png', title: 'Offer 2', expirationDate: '2024-12-31', description: 'Description 2', cashbackAmount: 10 },
    ];
    mockUseSelector.mockReturnValue({ data: mockData, loading: false, error: null });
    const tree = renderer.create(<OfferFeed />);
    const flatList = tree.root.findByType(FlatList);
    expect(flatList.props.data).toEqual(mockData);
    expect(flatList.props.renderItem({ item: mockData[0] })).toEqual(<OfferFeedItem item={mockData[0]} />);
  });
});
