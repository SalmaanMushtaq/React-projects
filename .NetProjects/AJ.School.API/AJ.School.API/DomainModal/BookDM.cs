using AJ.School.API.DomainModal.Base;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace AJ.School.API.DomainModal
{
    public class BookDM : BaseDM<int>
    {
        public string Title { get; set; }
        public string? Description { get; set; }

        [ForeignKey(nameof(Author))]
        public int Id { get; set; }
        [JsonIgnore]
        public AuthorDM Author { get; set; }
    }
}
