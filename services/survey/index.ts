import { 
    getDashboardDrainaseSection,
    getDashboardRoadSection,
    getDashboardTableBridgeSection,
    getDashboardTableBridgeSectionDetail,
    getDashboardTableDrainaseSection,
    getDashboardTableDrainaseSectionDetail,
    getDashboardTableRoadSection,
    getDashboardTableRoadSectionDetail,

} from "@/api/survey";
  import { useAccessToken } from "@/store/sipp";
  import { useQuery } from "@tanstack/react-query";
  
  export * from "./user";
  
  export const useGetDashoardRoadSection = (query?: string) => {
    const accessToken = useAccessToken();
  
    return useQuery({
      queryKey: ["useGetDashoardRoadSection", query, accessToken],
      // TODO replace with actual get Profile API
      queryFn: () => getDashboardRoadSection(query),
      enabled: !!accessToken,
      refetchOnWindowFocus: true,
    });
  };

//   get table ruas jalan dashboard
export const useGetDashoardTableRoadSection = (query?: string) => {
    const accessToken = useAccessToken();
  
    return useQuery({
      queryKey: ["useGetDashoardTableRoadSection", query, accessToken],
      // TODO replace with actual get Profile API
      queryFn: () => getDashboardTableRoadSection(query),
      enabled: !!accessToken,
      refetchOnWindowFocus: true,
    });
  };
//   get table ruas jalan dashboard

// get detail ruas jalan dashboard
export const useGetDetailRuasJalan = (id?: string) => {
    const accessToken = useAccessToken();
  
    return useQuery({
      queryKey: ["useGetDetailRuasJalan", id, accessToken],
      // TODO replace with actual get Profile API
      queryFn: () => getDashboardTableRoadSectionDetail(id),
      enabled: !!accessToken,
      refetchOnWindowFocus: true,
    });
  };
// get detail ruas jalan dashboard

//   get table ruas jembatan dashboard
export const useGetDashoardTableBridgeSection = (query?: string) => {
    const accessToken = useAccessToken();
  
    return useQuery({
      queryKey: ["useGetDashoardTableBridgeSection", query, accessToken],
      // TODO replace with actual get Profile API
      queryFn: () => getDashboardTableBridgeSection(query),
      enabled: !!accessToken,
      refetchOnWindowFocus: true,
    });
  };
//   get table ruas jembatan dashboard

// get detail ruas jembatan dashboard
export const useGetDetailRuasJembatan = (id?: string) => {
    const accessToken = useAccessToken();
  
    return useQuery({
      queryKey: ["useGetDetailRuasJembatan", id, accessToken],
      // TODO replace with actual get Profile API
      queryFn: () => getDashboardTableBridgeSectionDetail(id),
      enabled: !!accessToken,
      refetchOnWindowFocus: true,
    });
  };
// get detail ruas jembatan dashboard

// get dashboard drainase
export const useGetDashoardDrainaseSection = (query?: string) => {
    const accessToken = useAccessToken();
  
    return useQuery({
      queryKey: ["useGetDashoardDrainaseSection", query, accessToken],
      // TODO replace with actual get Profile API
      queryFn: () => getDashboardDrainaseSection(query),
      enabled: !!accessToken,
      refetchOnWindowFocus: true,
    });
  };
// get dashboard drainase

//   get table ruas jembatan dashboard
export const useGetDashoardTableDrainaseSection = (query?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDashoardTableDrainaseSection", query, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDashboardTableDrainaseSection(query),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
//   get table ruas jembatan dashboard

// get detail ruas jembatan dashboard
export const useGetDetailRuasDrainase = (id?: string) => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetDetailRuasDrainase", id, accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getDashboardTableDrainaseSectionDetail(id),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
// get detail ruas jembatan dashboard