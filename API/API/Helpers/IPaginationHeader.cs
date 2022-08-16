namespace API.Helpers
{
    public interface IPaginationHeader
    {
        int CurrentPage { get; set; }
        int ItemsPerPage { get; set; }
        int TotalItems { get; set; }
        int TotalPages { get; set; }
    }
}